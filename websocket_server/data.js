import { interval } from "rxjs"
import { take } from "rxjs/operators"

const first5SpacedNumbers = interval(1000).pipe(take(5))

first5SpacedNumbers.subscribe((v) => console.log("A", v))
// Will start logging A1... A2...

setTimeout(() => {
  first5SpacedNumbers.subscribe((v) => console.log("B", v))
}, 2000)
