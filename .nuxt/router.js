import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _721c7d06 = () => interopDefault(import('../pages/content/index.vue' /* webpackChunkName: "pages/content/index" */))
const _242206ec = () => interopDefault(import('../pages/member/index.vue' /* webpackChunkName: "pages/member/index" */))
const _864f634e = () => interopDefault(import('../pages/account/forgetPassword.vue' /* webpackChunkName: "pages/account/forgetPassword" */))
const _0245ad70 = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _edcfead8 = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _4e9f712e = () => interopDefault(import('../pages/account/resetPassword.vue' /* webpackChunkName: "pages/account/resetPassword" */))
const _e123be14 = () => interopDefault(import('../pages/member/cart.vue' /* webpackChunkName: "pages/member/cart" */))
const _1a29a11c = () => interopDefault(import('../pages/member/checkout.vue' /* webpackChunkName: "pages/member/checkout" */))
const _2197fea2 = () => interopDefault(import('../pages/member/collections.vue' /* webpackChunkName: "pages/member/collections" */))
const _7a491231 = () => interopDefault(import('../pages/member/orderPlan.vue' /* webpackChunkName: "pages/member/orderPlan" */))
const _bd225c40 = () => interopDefault(import('../pages/member/orderReceipt.vue' /* webpackChunkName: "pages/member/orderReceipt" */))
const _3ba2a848 = () => interopDefault(import('../pages/member/records.vue' /* webpackChunkName: "pages/member/records" */))
const _41cdf221 = () => interopDefault(import('../pages/content/ebook/reading/_id.vue' /* webpackChunkName: "pages/content/ebook/reading/_id" */))
const _72a3a4a4 = () => interopDefault(import('../pages/content/ebook/_id.vue' /* webpackChunkName: "pages/content/ebook/_id" */))
const _13981dba = () => interopDefault(import('../pages/content/media/_id.vue' /* webpackChunkName: "pages/content/media/_id" */))
const _4cc131cb = () => interopDefault(import('../pages/content/paperbook/_id.vue' /* webpackChunkName: "pages/content/paperbook/_id" */))
const _3c1daa3c = () => interopDefault(import('../pages/content/test/_id.vue' /* webpackChunkName: "pages/content/test/_id" */))
const _5da38493 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/content",
    component: _721c7d06,
    name: "content"
  }, {
    path: "/member",
    component: _242206ec,
    name: "member"
  }, {
    path: "/account/forgetPassword",
    component: _864f634e,
    name: "account-forgetPassword"
  }, {
    path: "/account/login",
    component: _0245ad70,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _edcfead8,
    name: "account-register"
  }, {
    path: "/account/resetPassword",
    component: _4e9f712e,
    name: "account-resetPassword"
  }, {
    path: "/member/cart",
    component: _e123be14,
    name: "member-cart"
  }, {
    path: "/member/checkout",
    component: _1a29a11c,
    name: "member-checkout"
  }, {
    path: "/member/collections",
    component: _2197fea2,
    name: "member-collections"
  }, {
    path: "/member/orderPlan",
    component: _7a491231,
    name: "member-orderPlan"
  }, {
    path: "/member/orderReceipt",
    component: _bd225c40,
    name: "member-orderReceipt"
  }, {
    path: "/member/records",
    component: _3ba2a848,
    name: "member-records"
  }, {
    path: "/content/ebook/reading/:id?",
    component: _41cdf221,
    name: "content-ebook-reading-id"
  }, {
    path: "/content/ebook/:id?",
    component: _72a3a4a4,
    name: "content-ebook-id"
  }, {
    path: "/content/media/:id?",
    component: _13981dba,
    name: "content-media-id"
  }, {
    path: "/content/paperbook/:id?",
    component: _4cc131cb,
    name: "content-paperbook-id"
  }, {
    path: "/content/test/:id?",
    component: _3c1daa3c,
    name: "content-test-id"
  }, {
    path: "/",
    component: _5da38493,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
