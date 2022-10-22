# Publish/Subscribe Pattern

**Pub/Sub** pattern is a popular messaging model that consists of publishers and subscribers. Publishers publish messages to special **topics** (sometimes called channels) without caring about or even knowing who will read thoses messages, and subcribers subscribe to topics and read messages coming through those topics.

Pub/Sub systems often come with very powerful guarantees like **at-least-once delivery, persistent storage, ordering** of messages and **replayability** of messages.

## Idempotent

An operation that has the same ultimate outcome regardless of how many times it's performed. If an operation can be performed multiple times without changing its overall effect, it is idempotent. Operations performed through a **Pub/Sub** messaging system typically have to be idempotent, since Pub/Sub systems tend to allow the same messages to be consumed multiple times.

For xample, increasing an integer value in a database is _not_ an idempotent, since repeating this operation will not have the same effect as if it had been performed only once. Conversely, seting a value to "COMPLETE" _is_ an idempotent operation, since repeating this operation will always yield the same result: the value will be "COMPLETE"
