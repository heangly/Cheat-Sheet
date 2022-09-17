# Availability

---

#### Process

A program that is currently running on a machine. You should always assume that any process may get terminated at any time in a sufficiently large system.

#### Server

A machine or process that provides data or service for a client, usually by listening for incoming network calls.

Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

#### Node/Insance/Host

These three terms refer to the samr thing most of the time: a virtual or physical machine on which the developer runs processes sometimes the word **sever** also refer to this same concept.

---

#### Availability

The odds of a particular server or service being up and running at any point in time, usually measured in percentages. A server that has **99%** availablity will be perational 99% of the time(this would be described as having two **nine** of availablity)

#### High Availability

Used to describe systems that have particulary high levels of availabiliy, typically 5 nines or more; sometimes abbreviated "HA"

#### Nines

Typically refers to percentages of uptime. For example, 5 nines of availability means an uptime of 99.999% of the tie. Below are the downtimes expected per year depending on those 9s:

| Availablity      | Downtime     |
| ---------------- | ------------ |
| 99% (two 9s)     | 87.7 hours   |
| 99.9% (three 9s) | 8.8 hours    |
| 99.99%           | 52.6 minutes |
| 99.999%          | 5.3 minutes  |

#### Redundancy

The process of replicating parts of a sysem in en effort to make it more reliable

#### SLA

Short for "service level agreement" , and SLA is a collection of guarantees given to a customer by a service provider. SLAs typically make guarantees on a system's availability, amongst other things. SLAs are made up of one or multiple SLOs.

#### SLO

short for service-level objective", an SLO is a guarantee given to a customer by a service provider. SLOs typically make guarantees on a system's availability, amongst other things SLOS constitute an SLA.
