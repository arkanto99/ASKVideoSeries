// Alexa Sound Library
// https://developer.amazon.com/docs/custom-skills/ask-soundlibrary.html
// Speechcons
// https://developer.amazon.com/docs/custom-skills/speechcon-reference-interjections-english-us.html

module.exports = {
    en: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            GREETING_SPEECHCON: `<say-as interpret-as="interjection">bravo</say-as>`,
            DOUBT_SPEECHCON: `<say-as interpret-as="interjection">hmm</say-as>`,
            WELCOME_MSG: `Welcome to Happy Birthday {{name}}. Let's have some fun with your birthday! `,
            WELCOME_BACK_MSG: 'Welcome back {{name}}! ',
            REJECTED_MSG: 'No problem. Please say the date again so I can get it right.',
            DAYS_LEFT_MSG: `{{name}} There's {{count}} day left `,
            DAYS_LEFT_MSG_plural: '{{name}} There are {{count}} days left ',
            WILL_TURN_MSG: `until you're {{count}} year old. `,
            WILL_TURN_MSG_plural: `until you're {{count}} years old. `,
            GREET_MSG: '$t(POSITIVE_SOUND) $tGREETING_SPEECHCON) + {{name}} ',
            NOW_TURN_MSG: `You're now {{count}} year old! `,
            NOW_TURN_MSG_plural: `You're now {{count}} years old! `,
            MISSING_MSG: `$t(DOUBT_SPEECHCON). It looks like you haven't told me your birthday yet. `,
            POST_SAY_HELP_MSG: `If you want to change the date, try saying, register my birthday. You can also try to set up a reminder for your birthday or check today's birthdays. What would you like to do next? `,
            HELP_MSG: 'I can remember your birthday if you tell me the date. I can also tell you the remaining days until your next birthday. Or allow you to set up a reminder for your birthday. Finally I can tell you whose birthday is it today. Which one would you like to try? ',
            REPROMPT_MSG: `If you're not sure what to do next try asking for help. If you want to leave just say stop. What would you like to do next? `,
            GOODBYE_MSG: ['Goodbye {{name}}! ', 'So long {{name}}! ', 'See you later {{name}}! ', 'Cheers {{name}}! '],
            REFLECTOR_MSG: 'You just triggered {{intent}}',
            FALLBACK_MSG: `Sorry, I don't know about that. Please try again.`,
            ERROR_MSG: 'Sorry, there was an error. Please try again.',
            NO_TIMEZONE_MSG: `I can't determine your timezone. Please check your device settings and make sure a timezone was selected. After that please reopen the skill and try again!`,
            REMINDER_ERROR_MSG: 'Sorry, there was an error creating the reminder. ',
            UNSUPPORTED_DEVICE_MSG: `This device doesn't support this operation. `,
            CANCEL_MSG: `Ok. Let's cancel that. `,
            MISSING_PERMISSION_MSG: `It looks like you haven't granted permissions for reminders. I have just sent you a card to your Alexa app so you can quickly enable this. `,
            POST_REMINDER_HELP_MSG: `If you want to know when your reminder will trigger, you can say, how many days until my birthday. Or maybe you prefer to check for today's birthdays. What would you like to do next?`,
            API_ERROR_MSG: `I'm sorry, I'm having trouble accessing the external A.P.I. Please try again later. `,
            PROGRESSIVE_MSG: 'Let me check other birthdays {{name}}. ',
            CONJUNCTION_MSG: ' and ',
            TURNING_YO_MSG: ' turning {{count}}',
            CELEBRITY_BIRTHDAYS_MSG: `These are today's birthdays: `,
            ALSO_TODAY_MSG: 'Also celebrating their birthday today are: ',
            POST_CELEBRITIES_HELP_MSG: 'Maybe you can now check how many days are left until your birthday. And remember that you can also create a reminder for it. What would you like to do next? ',
            POST_CELEBRITIES_APL_HELP_MSG: 'You can try tapping on each celebrity to get more information. Or maybe you can check how many days are left until your birthday. What would you like to do next? ',
            LAUNCH_HEADER_MSG: 'Happy Birthday',
            LAUNCH_HINT_MSG: ['how many days until my birthday?', 'which celebrities have birthdays today?', 'set up a reminder for my birthday', 'register my birthday'],
            LIST_HEADER_MSG: `Today's Birthdays`,
            LIST_HINT_MSG: 'who celebrates a birthday today?',
            LIST_YO_ABBREV_MSG: '{{count}} year',
            LIST_YO_ABBREV_MSG_plural: '{{count}} years',
            LIST_PERSON_DETAIL_MSG: `{{person.humanLabel.value}} was born {{person.date_of_birth.value}} ago in {{person.place_of_birthLabel.value}}. `,
            POST_TOUCH_HELP_MSG: `Try tapping on other celebrities to get more information. If you're done, you can try to check on the remaining days until your birthday, or set a reminder for it. What would you like to do?`
        }
    },
    es: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            GREETING_SPEECHCON: `<say-as interpret-as="interjection">felicidades</say-as>`,
            DOUBT_SPEECHCON: `<say-as interpret-as="interjection">hmm</say-as>`,
            WELCOME_MSG: 'Te doy la bienvenida a Feliz Cumpleaños {{name}}. Vamos a divertirnos un poco con tu cumpleaños! ',
            WELCOME_BACK_MSG: 'Te doy la bienvenida otra vez {{name}}! ',
            REJECTED_MSG: 'No pasa nada. Por favor dime la fecha otra vez y lo corregimos. ',
            DAYS_LEFT_MSG: '{{name}} Queda {{count}} día ',
            DAYS_LEFT_MSG_plural: '{{name}} Quedan {{count}} días ',
            WILL_TURN_MSG: 'para que cumplas {{count}} año. ',
            WILL_TURN_MSG_plural: 'para que cumplas {{count}} años. ',
            GREET_MSG: '$t(POSITIVE_SOUND) $t(GREETING_SPEECHCON) {{name}} ',
            NOW_TURN_MSG: 'Hoy cumples {{count}} año! ',
            NOW_TURN_MSG_plural: 'Hoy cumples {{count}} años! ',
            MISSING_MSG: '$t(DOUBT_SPEECHCON). Parece que aun no me has dicho tu fecha de cumpleaños. ',
            POST_SAY_HELP_MSG: `Si quieres cambiar la fecha puedes decir, registra mi cumpleaños. También puedes crear un recordatorio para cuando cumplas o conocer los cumpleaños de hoy. Qué quieres hacer? `,
            HELP_MSG: 'Puedo recordar tu cumpleaños si me dices una fecha. Decirte cuanto falta para que cumplas. Crear un recordatorio para tu cumpleaños y decirte quién cumplle años hoy. Qué quieres hacer? ',
            REPROMPT_MSG: 'Si no sabes como continuar intent pedir ayuda. Si quieres salir solo dí para. Qué quieres hacer? ',
            GOODBYE_MSG: ['Hasta luego {{name}}! ', 'Adios {{name}}! ', 'Hasta pronto {{name}}! ', 'Nos vemos {{name}}! '],
            REFLECTOR_MSG: 'Acabas de activar {{intent}}',
            FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez. ',
            ERROR_MSG: 'Lo siento, ha habido un problema. Por favor inténtalo otra vez. ',
            NO_TIMEZONE_MSG: 'No he podido determinar tu zona horaria. Verifica la configuración de tu dispositivo, abre otraa vez la skill e inténtalo otra vez.',
            REMINDER_CREATED_MSG: '{{name}} Tu recordatorio se ha creado con éxito. ',
            REMINDER_ERROR_MSG: 'Perdona, ha habido un error al crear el recordatorio. ',
            UNSUPPORTED_DEVICE_MSG: 'Este dispositivo no soporta la operación que estás intentando realizar. ',
            CANCEL_MSG: 'Vale. Lo cancelamos. ',
            MISSING_PERMISSION_MSG: 'Parece que no has autorizado el envío de recordatorios. Te he enviado una tarjeta a la app Alexa para que lo habilites. ',
            POST_REMINDER_HELP_MSG: 'Si quieres saber cuando se aactivará tu recordatorio puedes decir, cuanto falta para mi cumpleaños. O quizá prefieras saber los cumpleaños de hoy. Qué quieres hacer ahora?',
            API_ERROR_MSG: 'Lo siento, ha habido un problema de acceso a la API externa. Por favor inténtalo otra vez. ',
            PROGRESSIVE_MSG: 'Déjame ver quién cumple hoy {{name}}. ',
            CONJUNCTION_MSG: ' y ',
            TURNING_YO_MSG: ' cumple {{count}} año',
            TURNING_YO_MSG_plural: ' cumple {{count}} años',
            CELEBRITY_BIRTHDAYS_MSG: 'En esta fecha cumplen años: ',
            ALSO_TODAY_MSG: 'También hoy cumplen: ',
            POST_CELEBRITIES_HELP_MSG: 'Quizá ahora puedes preguntar por cuantos días quedan hasta tu cumpleaños. Y recuerda que también puedes configurar un recordatorio para no olvidarlo. Que quieres hacer ahora? ',
            POST_CELEBRITIES_APL_HELP_MSG: 'Puedes intentar tocar las fotos para obtener más información. O quizá quieres preguntar cuantos días quedan para tu cumpleaños. Que otra cosa te gustaría hacer? ',
            LAUNCH_HEADER_MSG: 'Feliz Cumpleaños',
            LAUNCH_HINT_MSG: ['cuanto falta para mi cumpleaños?', 'quién cumple años hoy?', 'crea un recordatorio para mi cumpleaños', 'registra mi fecha de cumpleaños'],
            LIST_HEADER_MSG: 'Cumpleaños de Hoy',
            LIST_HINT_MSG: 'quién cumple años hoy?',
            LIST_YO_ABBREV_MSG: '{{count}} año',
            LIST_YO_ABBREV_MSG_plural: '{{count}} años',
            LIST_PERSON_DETAIL_MSG: `{{person.humanLabel.value}} nació hace {{person.date_of_birth.value}} en <lang xml:lang="en-US">{{person.place_of_birthLabel.value}}</lang>. `,
            POST_TOUCH_HELP_MSG: `Intenta tocar en otras fotos para obtenr más información. Sino, puedes ver cuantos días quedan para tu cumpleaños o crear un recordatorio para no olvidarlo. Que quieres hacer?`
        }
    },
    fr: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            GREETING_SPEECHCON: `<say-as interpret-as="interjection">Cocorico</say-as>`,
            DOUBT_SPEECHCON: `<say-as interpret-as="interjection">Hmmm</say-as>`,
            WELCOME_MSG: 'Bienvenue sur la Skill des anniversaires {{name}}! ',
            WELCOME_BACK_MSG: 'Content de vous revoir {{name}}! ',
            REJECTED_MSG: 'D\'accord, je ne vais pas prendre en compte cette date. Dites-moi une autre date pour que je puisse l\'enregistrer.',
            DAYS_LEFT_MSG: '{{name}} Il vous reste {{count}} jour ',
            DAYS_LEFT_MSG_plural: '{{name}} Il vous reste {{count}} jours ',
            WILL_TURN_MSG: 'avant d\'avoir {{count}} an. ',
            WILL_TURN_MSG_plural: 'avant d\'avoir {{count}} ans. ',
            GREET_MSG: '$t(POSITIVE_SOUND) $t(GREETING_SPEECHCON) {{name}} ',
            NOW_TURN_MSG: 'Aujourd\'hui, vous avez {{count}} an!',
            NOW_TURN_MSG_plural: 'Aujourd\'hui, vous avez {{count}} ans! ',
            MISSING_MSG: '$t(DOUBT_SPEECHCON). Il me semble que vous ne m\'avez pas encore dit votre date de naissance. ',
            POST_SAY_HELP_MSG: `Si vous souhaitez changez votre date de naissance, dites simplement "enregistre mon anniversaire" ou bien dites moi directement votre date de naissance. Quel est votre choix ?`,
            HELP_MSG: 'Je peux me souvenir de votre anniversaire et vous dire le nombre de jours restant avant de le fêter. Quel est votre choix ?',
            REPROMPT_MSG: `Pour obtenir plus d'informations sur ce que je peux faire pour vous, demandez-moi de l'aide. Si vous voulez quitter la Skill, dites simplement "stop". Quel est votre choix ?`,
            GOODBYE_MSG: ['Au revoir {{name}}! ', 'A bientôt {{name}}! ', 'A la prochaine fois {{name}}! '],
            REFLECTOR_MSG: 'Vous avez invoqué l\'intention {{intent}}',
            FALLBACK_MSG: 'Désolé, je ne sais pas répondre à votre demande. Pouvez-vous reformuler?. ',
            ERROR_MSG: 'Désolé, je n\'ai pas compris. Pouvez-vous reformuler? ',
            NO_TIMEZONE_MSG: 'Je n\'ai pas réussi à déterminer votre fuseau horaire. Veuillez vérifier les paramètres de votre appareil et réessayez.',
            REMINDER_ERROR_MSG: 'Il y a eu un problème pendant la création du rappel. ',
            UNSUPPORTED_DEVICE_MSG: 'Votre appareil ne supporte pas la création de rappels. ',
            CANCEL_MSG: 'Ok, J\'ai annulé la demande de rappel. ',
            MISSING_PERMISSION_MSG: 'Je n\'ai pas accès à la création de rappels. Veuillez accéder à votre application Alexa et suivez les instructions depuis la card que je vous ai envoyé. ',
            POST_REMINDER_HELP_MSG: `Pour connaître quand votre rappel se déclenchera, il suffit de me dire "combien de jours reste-t-il avant mon anniversaire". Que voulez-vous faire ?`,
            PROGRESSIVE_MSG: 'Je recherche des célébrités nées aujourd\'hui... ',
            API_ERROR_MSG: `Désolé, je n'arrive pas à me connecter à l'API externe pour obtenir des résultats. Veuillez réessayer plus tard. `,
            CONJUNCTION_MSG: ' et ',
            TURNING_YO_MSG: [' qui vient d\'avoir {{count}} an', ' avec {{count}} an'],
            TURNING_YO_MSG_plural: [' qui vient d\'avoir {{count}} ans', ' avec {{count}} ans'],
            CELEBRITY_BIRTHDAYS_MSG: 'En ce jour, les célébrités suivantes fêtent leur anniversaire: ',
            ALSO_TODAY_MSG: 'C\'est aussi l\'anniversaire de : ',
            POST_CELEBRITIES_HELP_MSG: 'Voulez-vous connaître le nombre de jours avant votre anniversaire ou bien enregistrer un rappel: quel est votre choix ?',
            POST_CELEBRITIES_APL_HELP_MSG: `Vous pouvez sélectionner une célébrité à l'écran pour obtenir des détails à son sujet ou bien connaître le nombre de jours restant avant votre anniversaire. Quel est votre choix ?`,
            LAUNCH_HEADER_MSG: 'Joyeux Anniversaire',
            LAUNCH_HINT_MSG: ['combien de temps reste-t-il avant mon anniversaire ?', 'qui est né aujourd\'hui?', 'rappelle-moi mon anniversaire', 'enregistre ma date de naissance'],
            LIST_HEADER_MSG: 'Anniversaires du jour',
            LIST_HINT_MSG: 'quelles sont les célébrités nées aujourd\'hui ?',
            LIST_YO_ABBREV_MSG: '{{count}} an',
            LIST_YO_ABBREV_MSG_plural: '{{count}} ans',
            LIST_PERSON_DETAIL_MSG: `{{person.humanLabel.value}} est né il y a {{person.date_of_birth.value}} ans à <lang xml:lang="en-US">{{person.place_of_birthLabel.value}}</lang>. `,
            POST_TOUCH_HELP_MSG: `N'hésitez pas à sélectionner une autre célébrité pour obtenir des détails à son sujet. Vous pouvez aussi connaître le nombre de jours avant votre anniversaire ou bien enregistrer un rappel: quel est votre choix ?`
        }
    },
    "fr-CA": {
        translation: {
            WELCOME_MSG: 'Bienvenue sur la Skill des fêtes {{name}}! ',
            POST_SAY_HELP_MSG: `Si vous souhaitez changez votre date de naissance, dites simplement "sauve ma fête" ou bien dites moi directement votre date de naissance. Quel est votre choix ?`,
            HELP_MSG: 'Je peux me souvenir de votre fête et vous dire le nombre de jours restant avant de le célébrer. Quel est votre choix ?',
            POST_REMINDER_HELP_MSG: `Pour connaître quand votre rappel se déclenchera, il suffit de me dire "combien de jours reste-t-il avant ma fête". Que voulez-vous faire ?`,
            POST_CELEBRITIES_APL_HELP_MSG: `Vous pouvez sélectionner une vedette à l'écran pour obtenir des détails à son sujet ou bien connaître le nombre de jours restant avant votre fête. Quel est votre choix ?`,
            CELEBRITY_BIRTHDAYS_MSG: 'En ce jour, les vedettes suivantes célèbrent leur fête: ',
            ALSO_TODAY_MSG: 'C\'est aussi la fête de : ',
            POST_CELEBRITIES_HELP_MSG: 'Voulez-vous connaître le nombre de jours avant votre fête ou bien sauver un rappel: quel est votre choix ?',
            LAUNCH_TEXT_EMPTY_MSG: 'Quand est ma fête ?',
            LAUNCH_HINT_MSG: ['combien de temps reste-t-il avant ma fête ?', 'qui est né aujourd\'hui?', 'rappelle-moi ma fête', 'sauve ma date de naissance'],
            LIST_HEADER_MSG: 'Fêtes du jour',
            POST_TOUCH_HELP_MSG: `N'hésitez pas à sélectionner une autre vedette pour obtenir des détails à son sujet. Vous pouvez aussi connaître le nombre de jours avant votre fête ou bien sauver un rappel. Quel est votre choix ?`
        }
    }
}
