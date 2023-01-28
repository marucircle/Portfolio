export const SkillTypeKey = ['frontend', 'backend'] as const

export type SkillTypeKeyType = typeof SkillTypeKey[number]

export const SkillTypeList = Object.keys(SkillTypeKey)

export const SkillTypeFieldList = {
  frontend: ['UI', 'Test', 'Language'],
  backend: ['Test', 'Language'],
}
