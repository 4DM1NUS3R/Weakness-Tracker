import Dhcp
import Dns
import Http
import Ip
import Nat
import Port
import Hostname


def set_description(computerAnalysis):
    description = ""
    # test if computer is a router with firewall rules next print chain in ACCEPT policies
    if computerAnalysis.ip.forwarding and (
            len(computerAnalysis.nat.nat_policies["DROP"]) == 0 or len(computerAnalysis.nat.flt_policies["DROP"]) == 0):
        description += "L'ip forwarding est activé et les paramètres de pare-feu ne sont pas configuré de manière sécuritaire (policies ACCEPT)\n\n"
    if len(computerAnalysis.nat.nat_policies["DROP"]) == 0 or len(computerAnalysis.nat.flt_policies["DROP"]) == 0:
        space = False
        if len(computerAnalysis.nat.nat_policies["ACCEPT"]) > 0:
            nb_chain = len(computerAnalysis.nat.nat_policies["ACCEPT"])
            description += "{} chaine{} de la table NAT:".format(("La", "Les")[nb_chain > 1], ("", "s")[nb_chain > 1])
            for chain in computerAnalysis.nat.nat_policies["ACCEPT"]:
                description += " {} ".format(chain)
            description += "{} en policies ACCEPT.\n".format(("est", "sont")[nb_chain > 1])
            space = True
        if len(computerAnalysis.nat.flt_policies["ACCEPT"]) > 0:
            nb_chain = len(computerAnalysis.nat.flt_policies["ACCEPT"])
            description += "{} chaine{} de la table FILTER:".format(("La", "Les")[nb_chain > 1], ("", "s")[nb_chain > 1])
            for chain in computerAnalysis.nat.flt_policies["ACCEPT"]:
                description += " {} ".format(chain)
            description += "{} en policies ACCEPT.\n".format(("est", "sont")[nb_chain > 1])
            space = True
        if space:
            description += "\n"
        # test if some server are activated
        bad_serv_port = []
        if computerAnalysis.http.is_http:
            description += "Un serveur HTTP est activé et nécessite d'être sécurisé.\n"
        else:
            if "80" in computerAnalysis.port.ports["known"]:
                bad_serv_port.append("80")
            if "443" in computerAnalysis.port.ports["known"]:
                bad_serv_port.append("443")
        if computerAnalysis.dhcp.is_dhcp:
            description += "Un serveur DHCP est activé et nécessite d'être sécurisé.\n"
        else:
            if "67" in computerAnalysis.port.ports["known"]:
                bad_serv_port.append("67")
            if "68" in computerAnalysis.port.ports["known"]:
                bad_serv_port.append("68")
        if computerAnalysis.dns.is_dns:
            description += "Un serveur dNS est activé et nécessite d'être sécurisé.\n"
        else:
            if "53" in computerAnalysis.port.ports["known"]:
                bad_serv_port.append("53")
        if computerAnalysis.http.is_http or computerAnalysis.dhcp.is_dhcp or computerAnalysis.dns.is_dns:
            description += "\n"
        # check open port
        if len(computerAnalysis.port.ports["dynamic"]) > 0:
            nb_port = len(computerAnalysis.port.ports["dynamic"])
            description += "{} port{} : ".format(("Le", "Les")[nb_port > 1], ("", "s")[nb_port > 1])
            for port in computerAnalysis.port.ports["dynamic"]:
                description += " {} ".format(port)
            description += "pourrai{}t représenter un danger. La vérification de {} est à vérifier\n".format(("", "en")[nb_port > 1], ("sa légitimité", "la légitimité de chacun de ces ports")[nb_port > 1])
        if len(bad_serv_port) > 0:
            nb_port = len(bad_serv_port)
            description += "{} port{} : ".format(("Le", "Les")[nb_port > 1], ("", "s")[nb_port > 1])
            for port in bad_serv_port:
                description += " {} ".format(port)
            description += "{} pas relié{} a un service le nécessitant. Le mieux serait de {} fermé{}\n".format(("n'est", "ne sont")[nb_port > 1], ("", "s")[nb_port > 1], ("le", "les")[nb_port > 1], ("", "s")[nb_port > 1])
        bad_port = []
        if len(computerAnalysis.port.ports["known"]) > 0:
            for port in computerAnalysis.port.ports["known"]:
                if port not in ["80", "443", "67", "68", "53"]:
                    bad_port.append(port)
            nb_port = len(bad_port)
            description += "{} port{} : ".format(("Le", "Les")[nb_port > 1], ("", "s")[nb_port > 1])
            for port in bad_port:
                description += " {} ".format(port)
            description += "devrai{}t être fermé{} pour la sécurité du système".format(("", "en")[nb_port > 1], ("", "s")[nb_port > 1])
    return description


class ComputerAnalysis:
    hostname = None
    ip = None
    nat = None
    port = None
    http = None
    dhcp = None
    dns = None
    description = None

    def __init__(self, path):
        self.hostname = None
        self.ip = None
        self.nat = None
        self.port = None
        self.http = None
        self.dhcp = None
        self.dns = None
        self.description = None
        self.hostname = Hostname.Hostname(path)
        self.ip = Ip.Ip(path)
        self.nat = Nat.Nat(path)
        self.port = Port.Port(path)
        self.http = Http.Http(path)
        self.dhcp = Dhcp.Dhcp(path)
        self.dns = Dns.Dns(path)
        self.description = set_description(self)

    def reset(self):
        self.hostname = None
        self.ip = None
        self.nat = None
        self.port = None
        self.http = None
        self.dhcp = None
        self.dns = None


# comp = ComputerAnalysis("D:/efrei/cours/L3/BootCamp/fouretout/fich_hostname2")
# print(comp.description)
