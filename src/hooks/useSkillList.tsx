import { getSkillList } from '@/api/skill'
import {
  SkillTypeFieldList,
  SkillTypeKey,
  SkillTypeKeyType,
  SkillTypeList,
} from '@/constants/SkillTag'
import type { SkillDocument } from '@/types/prismic'
import { isSkillTypeKey } from '@/utils/isSkillTypeKey'
import { useEffect, useState } from 'react'

export const useSkillList = () => {
  const [skillList, setSkillList] = useState<SkillDocument<string>[]>([])
  const [skillSet, setSkillSet] = useState<{ type: SkillTypeKeyType; fields: string[] }>({
    type: SkillTypeKey[0],
    fields: SkillTypeFieldList[SkillTypeKey[0]],
  })
  const [selectedSkillField, setSelectedSkillField] = useState(skillSet.fields[0])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    console.log(SkillTypeList, selectedSkillField)
    getSkillList({ tags: [skillSet.type, selectedSkillField] })
      .then((res: SkillDocument<string>[]) => {
        setSkillList(res)
        console.log(res)
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setIsError(true)
      })
  }, [skillSet.type, selectedSkillField])

  const onChangeSkillField = (field: string) => {
    setSelectedSkillField(field)
  }

  //スキルタイプを変更した際に、fieldsを対応する値に置き換える
  const onChangeSkillType = (type: string) => {
    if (isSkillTypeKey(type)) {
      setSkillSet({ type, fields: SkillTypeFieldList[type] })
      setSelectedSkillField(skillSet.fields[0])
    }
  }

  return {
    skillList,
    skillSet,
    selectedSkillField,
    onChangeSkillField,
    onChangeSkillType,
    isLoading,
    isError,
  }
}
