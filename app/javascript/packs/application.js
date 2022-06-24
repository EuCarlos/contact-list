import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import bootstrap from "bootstrap";  
import BootstrapStorage from "bootstrap/modal";  
import jQuery from "jquery";
import "require_tree";

Rails.start()
Turbolinks.start()
ActiveStorage.start()
bootstrap.start()
BootstrapStorage.start()
jQuery.start()