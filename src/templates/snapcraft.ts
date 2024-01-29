import { ISnapcraftYaml } from '../types/snapcraft'

export const BASIC_SNAPCRAFT_YAML = <ISnapcraftYaml>{
  name: 'placeholder-name',
  base: 'core20',
  version: 'placeholder-version',
  summary: 'placeholder-summary',
  description: 'placeholder-description',

  grade: 'stable',
  confinement: 'strict',

  apps: {},

  parts: {
    'dump-binary': {
      plugin: 'dump',
      source: 'release',
      'source-type': 'local',
      stage: ['lib', 'icons'],
      prime: ['lib', 'icons'],
      'stage-packages': ['libc6']
    }
  }
}
