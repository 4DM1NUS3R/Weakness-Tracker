import Dhcp
import Dns
import Http
import Ip
import Nat
import Port


class ComputerAnalysis:
    ip = None
    nat = None
    port = None
    http = None
    dhcp = None
    dns = None

    def __init__(self, path="D:/efrei/cours/L3/BootCamp/fouretout/fich_hostname2"):
        self.ip = Ip.Ip(path)
        self.nat = Nat.Nat(path)
        self.port = Port.Port(path)
        self.http = Http.Http(path)
        self.dhcp = Dhcp.Dhcp(path)
        self.dns = Dns.Dns(path)


# test
ca = ComputerAnalysis()
print(ca.ip.ip)
print(ca.nat.nat_policies)
print(ca.nat.nat_policies)
print(ca.port.ports)
print(ca.http.is_http)
print(ca.dhcp.is_dhcp)
print(ca.dns.is_dns)

# à ajouter dans le script client
#   - fichier hostname
#   - renvoyer variable forward pour savoir si c'est un routeur
