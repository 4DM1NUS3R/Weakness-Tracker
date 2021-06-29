import re


class Port:
    ports = {"known": [], "dynamic": []}

    def __init__(self, path):
        self.ports = {"known": [], "dynamic": []}
        try:
            port_file = open("%s/nmap.conf" % path, "r")
            port_reg = re.findall("[0-9]+/", port_file.read())
            for port in port_reg:
                cls_port = port[0:-1]
                if int(cls_port) <= 1024:
                    self.ports["known"].append(cls_port)
                else:
                    self.ports["dynamic"].append(cls_port)
        except FileNotFoundError:
            print("File not found !")

