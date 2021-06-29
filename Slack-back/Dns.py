class Dns:
    is_dns = False

    def __init__(self, path):
        try:
            dns_file = open("%s/status.conf" % path, "r")
            dns_line = ""
            while "DNS" not in dns_line:
                dns_line = dns_file.readline()
            if "active" in dns_line:
                self.is_dns = True
        except FileNotFoundError:
            print("File not found !")





