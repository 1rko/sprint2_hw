export type ThemeState = {
    themeId: number
}

const initState: ThemeState = {
    themeId: 1,
}

export const changeThemeId = (id: number): { type: string, id: number } => ({type: 'SET_THEME_ID', id}) as const // fix any

type ChangeThemeId = ReturnType<typeof changeThemeId>

type ActionTypes = ChangeThemeId

export const themeReducer = (state = initState, action: ActionTypes): ThemeState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {themeId: action.id}
        default:
            return state
    }
}

