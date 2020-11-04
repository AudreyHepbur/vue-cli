const initCommercialData = () => {
  return {
    qualificationType: '', // 经营类目
    settlementId: '', // 入住类目结算规则
    merchantShortname: '', // 商户简称
    licenseNumber: '', // 注册号
    servicePhone: '', // 客服电话
    merchantName: '', // 商户名称
    bizStoreName: '', // 门店名称
    subjectType: '', // 主体类型
    shopId: '', // 店铺ID
    bizStoreAddress: '', // 门店地址
    bizAddressCode: '', // 门店省市编码
    storeEntrancePic: '', // 门店门头照片ID
    storeEntrancePicUrl: '', // 门店门头照片
    indoorPic: '', // 店内环境照片id
    indoorPicUrl: '', // 店内环境照片
    licenseCopy: '', // 营业执照照片id
    licenseCopyUrl: '', // 营业执照照片
    settlementPeriod: '', // 结算周期
    settlementRate: '', // 结算费率
    idCardName: '' // 身份证姓名
  }
}

const initLegalPersonData = () => {
  return {
    idCardCopy: '', // 身份证人像面照片id
    idCardCopyUrl: '', // 身份证人像面照片Url
    idCardNumber: '', // 身份证
    idCardName: '', // 身份证姓名
    idCardNational: '', // 身份证国徽面照片id
    idCardNationalUrl: '', // 身份证国徽面照片
    cardPeriodBegin: '', // 身份证有效期开始时间
    cardPeriodChoose: true,
    cardPeriodEnd: '', // 身份证有效期结束时间
    cardPeriodEndShow: '', //  身份证有效期结束时间显示
    owner: '', // 是否为受益所有人 ''
    ownerIdCardCopy: '', // 最终受益所有人身份证人像面照片id
    ownerIdCardCopyUrl: '', // 最终受益所有人身份证人像面照片
    name: '', // 最终受益所有人姓名
    idNumber: '', // 最终受益所有人证件号码
    ownerIdCardNational: '', // 最终受益所有人身份证国徽面id
    ownerIdCardNationalUrl: '', // 最终受益所有人身份证国徽面
    idPeriodBegin: '', // 最终受益所有人证件有效期开始时间
    idPeriodChoose: true,
    idPeriodEnd: '', // 最终受益所有人证件有效期结束时间
    idPeriodEndShow: '', //  最终受益所有人证件有效期结束时间显示
    contactInfoType: '', // 超级管理员身份 法人 负责人
    contactName: '', // 超级管理员姓名
    contactIdNumber: '', // 超级管理员身份证件号码
    mobilePhone: '', // 超级管理员联系手机
    contactEmail: '' // 超级管理员联系邮箱
  }
}

const initBalanceAccountData = () => {
  return {
    bankAccountType: '', // 账户类型
    accountNumber: '', // 银行卡账号
    accountName: '', // 开户名称
    accountBank: '', // 开户银行
    bankName: '', // 开户银行全称（含支行)
    bankAddressCode: '', // 开户银行省市编码,至少精确到市
    bankAddress: '' // 开户地址
  }
}

const state = {
  commercialData: initCommercialData(), // 商户信息
  legalPersonData: initLegalPersonData(), // 法人信息
  balanceAccountData: initBalanceAccountData() // 结算账户
}
const getters = {
  commercialData: (state) => state.commercialData,
  legalPersonData: (state) => state.legalPersonData,
  balanceAccountData: (state) => state.balanceAccountData
}
const mutations = {
  set_commercialData: (state, val) => {
    Object.assign(state.commercialData, val)
  },
  set_legalPersonData: (state, val) => {
    state.legalPersonData = val
  },
  set_balanceAccountData: (state, val) => {
    state.balanceAccountData = val
  }
}
const actions = {
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
