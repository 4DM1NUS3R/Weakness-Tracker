class Hostname:
    hostname = None

    def __init__(self, path):
        try:
            hostname_file = open("%s/hostname.conf" % path, "r")
            self.hostname = hostname_file.readline()
        except FileNotFoundError:
            print("File not found !")
