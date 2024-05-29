export namespace ApiEndpoints {
  export enum Public {
    REFRESH_TOKEN = 'auth/session/public/refresh',
  }

  export enum Private {
    GET_KANBAN_COLUMNS = 'avr/kanban/get_columns',
    GET_KANBAN_CARD = 'avr/kanban/get_card_by_id',
    GET_KANBAN_CARDS = 'avr/kanban/get_cards',
    CREATE_KANBAN_COLUMN = 'avr/kanban/create_column',
    UPDATE_KANBAN_COLUMN_NAME = 'avr/kanban/edit_column',
    DELETE_KANBAN_COLUMN = 'avr/kanban/delete_column',

    CREATE_KANBAN_CARD = 'avr/kanban/create_card',
    UPDATE_CARD_TITLE = 'avr/kanban/edit_card_title',
    UPDATE_CARD_DEADLINE_DATE = 'avr/kanban/update_card_deadline',
    UPDATE_CARD_OBSERVATION = 'avr/kanban/add_observation',
    SET_APPRAISER = 'avr/kanban/set_appraiser',
    SET_RESPONSIBLE_ENGINEER = 'avr/kanban/set_responsible_engineer',
    UPDATE_REAL_ESTATE_DATA = 'avr/kanban/update_real_estate_data',
    GET_REAL_ESTATE_DATA = 'avr/solicit/list',
    UPDATE_CARDS_POSITION = 'avr/kanban/update_cards_position',
    CREATE_KANBAN_TAG = 'avr/kanban/create_tag',
    UPDATE_CARD_TAGS = 'avr/kanban/update_card_tags',
    LIST_KANBAN_TAGS = 'avr/kanban/list_tags',
    MOVE_CARD_TO_COLUMN = 'avr/kanban/move_card_to_column',
    FINISH_KANBAN_CARD = 'avr/kanban/finish_card',
    ARCHIVE_KANBAN_CARD = 'avr/kanban/deactivate_card',
    GET_CARD_BY_AVR_CODE = 'avr/kanban/get_card_by_avr_code',

    GET_APPRAISERS = 'avr/solicit/responsible/start',
    GET_RESPONSIBLES = 'avr/solicit/responsible/finish',
  }
}