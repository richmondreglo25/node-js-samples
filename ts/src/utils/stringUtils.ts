export default {
    isBlank: (value: string | undefined) => value === "" || undefined === value || value.trim().length === 0,
    isEmpty: (value: string | undefined) => value === "" && undefined !== value && value.trim().length === 0
}