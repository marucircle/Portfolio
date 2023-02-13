import type { SkillDocument } from '@/types/prismic'
import { ResponsiveRadar } from '@nivo/radar'
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
    <ResponsiveRadar
      data={graphData}
      keys={['level']}
      indexBy="name"
      valueFormat=">-.2f"
      margin={{ top: 30, right: 80, bottom: 30, left: 80 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={18}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={{ scheme: 'nivo' }}
      blendMode="multiply"
      motionConfig="wobbly"
    />
  )
}
