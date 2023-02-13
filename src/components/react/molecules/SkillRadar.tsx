import type { SkillDocument } from '@/types/prismic'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import Styles from '@/styles/react/molecules/skill_radar.module.scss'

const trimmedSkillGraphData = (skillList: Array<SkillDocument>) => {
  return skillList.map((skill) => {
    return { name: skill.data.name, level: skill.data.level, fullMark: 10 }
  })
}

export const SkillRadar = ({ skillList }: { skillList: Array<SkillDocument> }) => {
  const graphData = trimmedSkillGraphData(skillList)
  return (
    <ResponsiveContainer width="100%" height="100%" className={Styles['container']}>
      <RadarChart
        cx="50%"
        cy="50%"
        className={Styles['skill-radar']}
        outerRadius={150}
        data={graphData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
        <Radar name="Skill" dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
