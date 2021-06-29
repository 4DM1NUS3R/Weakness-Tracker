import re


class Ip:
    ip = []
    forwarding = None

    def __init__(self, path):
        try:
            ip_file = open("%s/ip.conf" % path, "r")
            for ip in ip_file:
                ip_line = ip.strip()
                regex = re.compile(r"[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/[0-9]{1,2}")
                if re.search(regex, ip_line):
                    self.ip.append(ip_line)
                else:
                    regex = re.compile(r"(YES)")
                    if re.search(regex, ip_line):
                        self.forwarding = True
                    else:
                        self.forwarding = False
        except FileNotFoundError:
            print("File not found !")
