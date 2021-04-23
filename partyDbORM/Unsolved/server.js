let orm = require("./config/orm.js");

orm.selectAll("parties");

orm.selectAll("clients");

orm.selectWhere("parties", "party_type", "grown-up");

orm.selectFirstLeftJoinSecond("client_name", "client_id", "clients", "parties");