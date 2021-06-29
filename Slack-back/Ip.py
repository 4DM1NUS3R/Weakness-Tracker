class Ip:
    ip = []

    def __init__(self, path):
        try:
            ip_file = open("%s/ip.conf" % path, "r")
            for ip in ip_file:
                ip_line = ip.strip()
                self.ip.append(ip_line)
        except FileNotFoundError:
            print("File not found !")


