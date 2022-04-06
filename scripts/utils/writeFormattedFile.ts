import { writeFileSync } from 'fs'
import { format } from 'prettier'
import prettierConfig from '../../.prettierrc.json'

export function writeFormattedFile(path: string, content: string, parser = 'typescript') {
  writeFileSync(path, format(content, { parser, ...prettierConfig }))
}
