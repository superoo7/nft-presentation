export const range = (start = 0, end = 0, step = 1) => {
    if (start === end || step === 0) {
        return []
    }

    const diff = Math.abs(end - start)
    const length = Math.ceil(diff / step)

    return start > end
        ? Array.from({ length }, (_, key) => start - key * step)
        : Array.from({ length }, (_, key) => start + key * step)
}
