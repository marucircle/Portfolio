import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

const data = [
  {
    library: 'React（Next.js）',
    point: 9,
    fullMark: 10,
  },
  {
    library: 'Vue（Nuxt.js）',
    point: 7,
    fullMark: 10,
  },
  {
    library: 'Solid',
    point: 6,
    fullMark: 10,
  },
  {
    library: 'jQuery',
    point: 4,
    fullMark: 10,
  },
  {
    library: 'Wordpress',
    point: 6,
    fullMark: 10,
  },
]

export const SkillRadar = () => (
  <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={500} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="library" />
    <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
    <Radar name="Mike" dataKey="point" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8} />
  </RadarChart>
)
