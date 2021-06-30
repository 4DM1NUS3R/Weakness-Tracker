class Hostname:
    hostname = None

    def __init__(self, path):
        self.hostname = None
        try:
            hostname_file = open("%s/hostname.conf" % path, "r")
            self.hostname = hostname_file.readline()
        except FileNotFoundError:
            print("File not found !")
