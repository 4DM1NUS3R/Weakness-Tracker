class Http:
    is_http = False

    def __init__(self, path):
        self.is_http = False
        try:
            http_file = open("%s/status.conf" % path, "r")
            http_line = ""
            while "HTTP" not in http_line:
                http_line = http_file.readline()
            if "active" in http_line:
                self.is_http = True
        except FileNotFoundError:
            print("File not found !")
