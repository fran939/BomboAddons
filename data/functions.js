let registers = [];
export function registerWhen(trigger, dependency) {
  registers.push([trigger.unregister(), dependency, false]);
}