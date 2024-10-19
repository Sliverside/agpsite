import PageTranslation from '#models/page_translation'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async show(context: HttpContext) {
    const pageTranslation = await PageTranslation.query()
      .where('slug', context.request.url())
      .preload('page')
      .firstOrFail()

    return context.inertia.render('index', {
      page: {
        slug: pageTranslation.slug,
        title: pageTranslation.title,
        content: pageTranslation.content,
      },
    })
  }
}
