import type { SkillDocument } from '@/types/prismic'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

const trimmedSkillGraphData = (skillList: Array<SkillDocument>) => {
  return skillList.map((skill) => {
    return { name: skill.data.name, level: skill.data.level, fullMark: 10 }
  })
}

export const SkillRadar = ({ skillList }: { skillList: Array<SkillDocument> }) => {
  const graphData = trimmedSkillGraphData(skillList)
  return (
    <RadarChart
      className=""
      cx={250}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={graphData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
      <Radar name="Skill" dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8} />
    </RadarChart>
  )
}
