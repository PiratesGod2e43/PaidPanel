export const roleRank={CUSTOMER:0,MANAGER:1,ADMIN:2,CO_OWNER:3,OWNER:4} as const;
export function canManageRole(actor:string,target:string){return actor==='OWNER' || (actor==='CO_OWNER' && ['CUSTOMER','MANAGER','ADMIN'].includes(target));}
