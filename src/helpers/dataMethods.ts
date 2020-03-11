type StationsType = {
  empty_slots: number
  extra: {uid: number}
  free_bikes: number
  id: string
  latitude: number
  longitude: number
  name: string
  timestamp: string
}

class Networks {

  getArrDataNetworks(arr: Array<object>) {
    let arr1: any[] = [];
    arr.forEach((elem: any) => {
      if (typeof elem.company === 'string' && elem.company !== null) {
        arr1.push(elem.company);
      } else if (typeof elem.company === 'object' && elem.company !== null) {
        elem.company.forEach((elemSubArray: Array<string>) => {
          arr1.push(elemSubArray);
        })
      }
    });

    let uniqueNetworks: Array<string> = [];

    arr1.forEach((elem: string) => {
      if (!uniqueNetworks.includes(elem)) {
        uniqueNetworks.push(elem);
      }
    });

    let finallyArr: any[] = [];

    type finallyObjLocationsType = Array<{id: string, city: string}>;

    uniqueNetworks.forEach((elemUniq) => {

      let finallyObj = {
        network: elemUniq,
        location: [] as finallyObjLocationsType
      };

      arr.forEach((item: any) => {
        if (typeof item.company === 'object' && item.company !== null) {
          if (item.company.includes(elemUniq)) {
            finallyObj.location.push({
              id: item.id,
              city: item.location.city
            });
          }
        } else {
          if (item.company === elemUniq) {
            finallyObj.location.push({
              id: item.id,
              city: item.location.city
            });
          }
        }
      });

      finallyArr.push(finallyObj);

    });

    return finallyArr;

  }

  getArrDataStations(arr: Array<StationsType>) {
    return arr.map((elem) => {
      return {
        id: elem.id,
        name: elem.name,
        like: false
      }
    })
  }
}

export let networksFormatData = new Networks();
