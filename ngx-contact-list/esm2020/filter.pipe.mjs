import { Pipe } from '@angular/core';
import { Utils } from './util';
import * as i0 from "@angular/core";
export class FilterPipe {
    transform(list, obj) {
        if (list && Array.isArray(list) && obj && typeof obj === 'object') {
            let newList = list.filter((item) => {
                for (let key in obj) {
                    if (obj[key] == null || obj[key] == '') {
                        return true;
                    }
                    if (item[key].toLowerCase().includes(obj[key].toLowerCase().trim())) {
                        return true;
                    }
                    if (obj[key].toLowerCase().trim().split(' ').length > 1) {
                        const data = obj[key].toLowerCase().trim();
                        if (Utils.getFullString(item, obj).includes(data)) {
                            return true;
                        }
                    }
                }
            });
            return newList;
        }
        return list;
    }
}
FilterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FilterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.1", ngImport: i0, type: FilterPipe, name: "filter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'filter',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLFVBQVU7SUFDckIsU0FBUyxDQUFDLElBQVcsRUFBRSxHQUFRO1FBQzdCLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNqRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ3RDLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO29CQUNuQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDdEMsT0FBTyxJQUFJLENBQUM7cUJBQ2I7b0JBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO3dCQUNuRSxPQUFPLElBQUksQ0FBQztxQkFDYjtvQkFFRCxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDdkQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUUzQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDakQsT0FBTyxJQUFJLENBQUM7eUJBQ2I7cUJBQ0Y7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzt1R0EzQlUsVUFBVTtxR0FBVixVQUFVOzJGQUFWLFVBQVU7a0JBSHRCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7aUJBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2ZpbHRlcicsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGxpc3Q6IGFueVtdLCBvYmo6IGFueSkge1xuICAgIGlmIChsaXN0ICYmIEFycmF5LmlzQXJyYXkobGlzdCkgJiYgb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgbmV3TGlzdCA9IGxpc3QuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICAgIGlmIChvYmpba2V5XSA9PSBudWxsIHx8IG9ialtrZXldID09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXRlbVtrZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMob2JqW2tleV0udG9Mb3dlckNhc2UoKS50cmltKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob2JqW2tleV0udG9Mb3dlckNhc2UoKS50cmltKCkuc3BsaXQoJyAnKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gb2JqW2tleV0udG9Mb3dlckNhc2UoKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5nZXRGdWxsU3RyaW5nKGl0ZW0sIG9iaikuaW5jbHVkZXMoZGF0YSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld0xpc3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbn1cbiJdfQ==