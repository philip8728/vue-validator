import util, { warn } from './util'
import Asset from './asset'
import Override from './override'
import Validate from './directives/validate'
import Validator from './directives/validator'


/**
 * Install
 *
 * @param {Function} Vue
 * @param {Object} options
 */

export default function install (Vue, options = {}) {
  if (install.installed) {
    warn('already installed.')
    return
  }

  util.Vue = Vue
  Asset(Vue)

  Override(Vue)
  Validator(Vue)
  Validate(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}