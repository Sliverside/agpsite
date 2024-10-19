/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const pagesController = () => import('#controllers/pages_controller')

router.on('/private').renderInertia('private/index')
router.get('/*', [pagesController, 'show'])
