export class Message {
    directMessageId : number;
    body : string;
    sender : number;
    reciever : number;
}

export type MessageInfo = {
    match:  {
        directMessageId : number| null,
        body : string | null,
        sender : number | null,
        reciever : number |null,
      },
      messages:  Array< {
        directMessageId : number| null,
        body : string | null,
        sender : number | null,
        reciever : number |null,
      } > | null,
      lastActivityDate: string,
    }