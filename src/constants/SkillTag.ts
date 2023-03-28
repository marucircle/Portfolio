export const SkillTypeKey = ['frontend'] as const

export type SkillTypeKeyType = typeof SkillTypeKey[number]

export const SkillTypeList = Object.keys(SkillTypeKey)

//TODO CMSからタグを取得していい感じにできないか？
export const SkillTypeFieldList = {
  frontend: ['UI', 'Test'],
}
