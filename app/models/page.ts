import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import PageTranslation from './page_translation.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Page extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasMany(() => PageTranslation)
  declare translations: HasMany<typeof PageTranslation>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
