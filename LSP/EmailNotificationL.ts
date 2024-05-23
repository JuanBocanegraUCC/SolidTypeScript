class EmailNotificationL implements Notification {
    badge: string;
    body: string;
    data: any;
    dir: NotificationDirection;
    icon: string;
    lang: string;
    onclick: ((this: Notification, ev: Event) => any) | null;
    onclose: ((this: Notification, ev: Event) => any) | null;
    onerror: ((this: Notification, ev: Event) => any) | null;
    onshow: ((this: Notification, ev: Event) => any) | null;
    requireInteraction: boolean;
    silent: boolean | null;
    tag: string;
    title: string;
    close(): void {
        throw new Error("Method not implemented.");
    }
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
    addEventListener(type: unknown, listener: unknown, options?: unknown): void {
        throw new Error("Method not implemented.");
    }
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener(type: unknown, listener: unknown, options?: unknown): void {
        throw new Error("Method not implemented.");
    }
    dispatchEvent(event: Event): boolean {
        throw new Error("Method not implemented.");
    }
    send(student: StudentL, course: Course): void {
        console.log(`Sending email to ${student.name} for course ${course.name}`);
    }
}