module.exports={    login(ctx, param){        if (sessionStorage.session_id && sessionStorage.hotel_id) {            console.log('SESSIONSTORAGE: ', sessionStorage.session_id, sessionStorage.hotel_id)        }else {            console.log('LOGIN: ', param.session, param.hotel_id);            sessionStorage.session_id = param.session;            sessionStorage.hotel_id = param.hotel_id;        }        // ctx.commit('SESSION', param.session);        ctx.commit('HOTEL', {'hotel_id': param.hotel_id});    },    urlquery(ctx,param) {        let o = {}        // console.log("hhh：",window.location.search); ?app=wqt&session=gs_lacaw2mcb4apjef06lxmzq==&hotel_id=0864f6731acb11e780ad5cb9018d9b5c        console.log("hehhe：",decodeURIComponent(window.location.search));        window.location.search.split('&').forEach(i => i ? o[i.split(/=/)[0].replace(/\?/, '')] = decodeURIComponent(i.split(/=/)[1]) : null)        ctx.commit('URLQUERY', o);        param.callback();    },}