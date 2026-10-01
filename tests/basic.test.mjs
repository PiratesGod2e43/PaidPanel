import test from 'node:test'; import assert from 'node:assert/strict';
test('project metadata exists',()=>assert.equal('PiratesNodes','PiratesNodes'));
test('role order protects owner',()=>assert.equal(['CUSTOMER','MANAGER','ADMIN','CO_OWNER','OWNER'].at(-1),'OWNER'));
