System.register(["./index-legacy.8d08866b.js"],(function(t,n){"use strict";var e;return{setters:[function(t){e=t.y}],execute:function(){t("u",e({id:"student",state:function(){return{students:[]}},persist:!1,getters:{getAllStudents:function(t){return t.students},getStudentById:function(t){return function(n){return t.students.find((function(t){return t.id===n}))}}},actions:{setStudents:function(t){this.students=t}}}))}}}));
