import { SkillTypeKey, type SkillTypeKeyType } from '@/constants/SkillTag'

export const isSkillTypeKey = (type: string): type is SkillTypeKeyType => {
  return SkillTypeKey.some((value) => value === type)
}
