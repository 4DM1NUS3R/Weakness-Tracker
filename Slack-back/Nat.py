import re


class Nat:
    nat_policies = {"ACCEPT": [], "DROP": []}
    flt_policies = {"ACCEPT": [], "DROP": []}

    def __init__(self, path):
        self.nat_policies = {"ACCEPT": [], "DROP": []}
        self.flt_policies = {"ACCEPT": [], "DROP": []}
        try:
            nat_tab_file = open("%s/nat.conf" % path, "r")
            flt_tab_file = open("%s/filter.conf" % path, "r")

            # Per line reading for nat table
            for rule in nat_tab_file:
                rule_line = rule.strip()
                # nat policies analyze
                regex = re.compile(r"Chain (PREROUTING|INPUT|POSTROUTING|OUTPUT) \(policy (ACCEPT|DROP)\)")
                if re.search(regex, rule_line):
                    regex = re.compile(r"(PREROUTING|INPUT|POSTROUTING|OUTPUT)")
                    chain = re.search(regex, rule_line).group()
                    regex = re.compile(r"ACCEPT")
                    if re.search(regex, rule_line):
                        self.nat_policies["ACCEPT"].append(chain)
                    else:
                        self.nat_policies["DROP"].append(chain)

            # Per line reading for filter table
            for rule in flt_tab_file:
                rule_line = rule.strip()
                # filter policies analyze
                regex = re.compile(r"Chain (INPUT|OUTPUT|FORWARD) \(policy (ACCEPT|DROP)\)")
                if re.search(regex, rule_line):
                    regex = re.compile(r"(INPUT|OUTPUT|FORWARD)")
                    chain = re.search(regex, rule_line).group()
                    regex = re.compile(r"ACCEPT")
                    if re.search(regex, rule_line):
                        self.flt_policies["ACCEPT"].append(chain)
                    else:
                        self.flt_policies["DROP"].append(chain)

        except FileNotFoundError:
            print("nat.conf or filter.conf not found !")


