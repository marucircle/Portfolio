import { SkillRadar } from '@/components/react/molecules/SkillRadar'
import { useSkillList } from '@/hooks/useSkillList'
import { SelectBox } from '../molecules/SelectBox'
import { SkillTypeFieldList, SkillTypeKey } from '@/constants/SkillTag'
import Styles from '@/styles/react/container/skill_view_container.module.scss'

export const SkillViewContainer = () => {
  const {
    skillList,
    skillSet,
    selectedSkillField,
    onChangeSkillType,
    onChangeSkillField,
    isLoading,
    isError,
  } = useSkillList()

  return (
    <div className={Styles['container']}>
      <div className={Styles['select-box-list']}>
        <SelectBox
          options={Object.keys(SkillTypeFieldList)}
          defaultValue="frontend"
          value={skillSet.type}
          onChange={(e) => {
            onChangeSkillType(e.target.value)
          }}
        />
        <SelectBox
          options={skillSet.fields}
          defaultValue="UI"
          value={selectedSkillField}
          onChange={(e) => {
            onChangeSkillField(e.target.value)
          }}
        />
      </div>
      <div className={Styles['skill-radar-container']}>
        {!isLoading && <SkillRadar skillList={skillList} />}
      </div>
    </div>
  )
}
