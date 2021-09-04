import SamplesAPI from '~/apis/samples.api'
import { Sample } from '~/classes/sample.class'
import { ISample } from '~/interfaces/sample.interface'

const MODULE_STATE = {
  samples: [] as ISample[],
  sample: new Sample() as ISample,
}

export const state = () => MODULE_STATE

export const getters = {
  samples: (state: typeof MODULE_STATE) => state.samples,
  sample: (state: typeof MODULE_STATE) => state.sample,
}

export const mutations = {
  setSample: (state: typeof MODULE_STATE, sample: ISample) => {
    state.sample = sample
  },
  setSamples: (state: typeof MODULE_STATE, samples: ISample[]) => {
    state.samples = samples
  },
}

export const actions = {
  getAllSamples: async (context: any): Promise<ISample[]> => {
    const samples = await SamplesAPI.getAll()
    context.commit('setSamples', samples)

    return samples
  },
  getSample: async (context: any, id: number | string) => {
    const sample = await SamplesAPI.get(id)
    context.commit('setSample', sample)

    return sample
  },
  createSample: async (context: any, sample: ISample) => {
    const response = await SamplesAPI.create(sample)
    context.commit('setSample', sample)

    return response
  },
  editSample: async (context: any, sample: ISample) => {
    const response = await SamplesAPI.put(sample.id, sample)
    context.commit('setSample', sample)

    return response
  },
  deleteSample: async (context: any, sampleId: number | string) => {
    const response = await SamplesAPI.delete(sampleId)
    const samples = context.state.samples.filter(
      (sample: ISample) => sample.id !== sampleId
    )
    context.commit('setSamples', samples)

    return response
  },
}
