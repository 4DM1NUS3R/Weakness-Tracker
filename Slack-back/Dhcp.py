class Dhcp:
    is_dhcp = False

    def __init__(self, path):
        self.is_dns = False
        try:
            dhcp_file = open("%s/status.conf" % path, "r")
            dhcp_line = ""
            while "DHCP" not in dhcp_line:
                dhcp_line = dhcp_file.readline()
            if "active" in dhcp_line:
                self.is_dhcp = True
        except FileNotFoundError:
            print("File not found !")


