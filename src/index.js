import VueComponent from "./VueComponent.vue";

var COMPONENT_NAME = "component-name"
var Plugin = {
  install (Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return
		}

		this.installed = true;
		this.componentName = options.componentName || COMPONENT_NAME;


		Vue.component(this.componentName, VueComponent);
	}
}

export default Plugin;
