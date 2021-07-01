import os
import ComputerAnalysis


class NetworkAnalysis:
    network = {}  # format {"hostname1": ComputerAnalysis1, "hostname2": ComputerAnalysis2}

    def __init__(self, path="C:/Users/rayw2/OneDrive/Documents/Cours/L3/S6/MasterCamp/Projet MC/fouretout"):
        self.network = {}
        for file in os.listdir(path):
            comp_analysis = ComputerAnalysis.ComputerAnalysis(
                "{}/{}".format(path, file))
            comp_value = {"hostname": comp_analysis.hostname.hostname,
                          "ip": comp_analysis.ip.ip,
                          "forwarding": comp_analysis.ip.forwarding,
                          "rules": {"nat": comp_analysis.nat.nat_policies, "filter": comp_analysis.nat.flt_policies},
                          "port": comp_analysis.port.ports,
                          "server": {"HTTP": {"state": comp_analysis.http.is_http, "description": "work in progress"},
                                     "DHCP": {"state": comp_analysis.dhcp.is_dhcp, "description": "work in progress"},
                                     "DNS": {"state": comp_analysis.dns.is_dns, "description": "work in progress"}},
                          "description": comp_analysis.description
                          }
            self.network[comp_analysis.hostname.hostname] = comp_value
            comp_analysis.reset()


# test
net = NetworkAnalysis()
print(net.network)
for comp in net.network:
    print("{}\n".format(comp))
    print(net.network[comp]["description"])
