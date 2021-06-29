import Dhcp
import Dns
import Http
import Ip
import Nat
import Port
import Hostname


class ComputerAnalysis:
    hostname = None
    ip = None
    nat = None
    port = None
    http = None
    dhcp = None
    dns = None

    def __init__(self, path):
        self.hostname = None
        self.ip = None
        self.nat = None
        self.port = None
        self.http = None
        self.dhcp = None
        self.dns = None
        self.hostname = Hostname.Hostname(path)
        self.ip = Ip.Ip(path)
        self.nat = Nat.Nat(path)
        self.port = Port.Port(path)
        self.http = Http.Http(path)
        self.dhcp = Dhcp.Dhcp(path)
        self.dns = Dns.Dns(path)

    def reset(self):
        self.hostname = None
        self.ip = None
        self.nat = None
        self.port = None
        self.http = None
        self.dhcp = None
        self.dns = None
