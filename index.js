module.exports = ({exact = false} = {}) => {
  return exact ? /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i : /magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+/gi
}
