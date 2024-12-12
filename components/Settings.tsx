import { useState } from "preact/hooks";
import { settingsContent } from "../internalization/content.ts";

export default function Settings({ 
  apiUrl, 
  apiKey,
  apiModel,
  ttsUrl,
  ttsKey,
  ttsModel,
  onSave, 
  onClose,
  lang = 'en'
}: { 
  apiUrl: string;
  apiKey: string;
  apiModel: string;
  ttsUrl: string;
  ttsKey: string;
  ttsModel: string;
  onSave: (apiUrl: string, apiKey: string, apiModel: string, ttsUrl: string, ttsKey: string, ttsModel: string) => void;
  onClose: () => void;
  lang?: string;
}) {
  const [newApiUrl, setNewApiUrl] = useState(apiUrl);
  const [newApiKey, setNewApiKey] = useState(apiKey);
  const [newModel, setNewModel] = useState(apiModel);
  const [newTtsUrl, setNewTtsUrl] = useState(ttsUrl);
  const [newTtsKey, setNewTtsKey] = useState(ttsKey);
  const [newTtsModel, setNewTtsModel] = useState(ttsModel);

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 class="text-xl font-bold mb-4">{settingsContent[lang].title}</h2>
        
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {settingsContent[lang].apiUrlLabel}
          </label>
          <input
            type="text"
            value={newApiUrl}
            onChange={(e) => setNewApiUrl((e.target as HTMLInputElement).value)}
            class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder={settingsContent[lang].apiUrlPlaceholder}
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {settingsContent[lang].apiKeyLabel}
          </label>
          <input
            type="password"
            value={newApiKey}
            onChange={(e) => setNewApiKey((e.target as HTMLInputElement).value)}
            class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder={settingsContent[lang].apiKeyPlaceholder}
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {settingsContent[lang].modelLabel}
          </label>
          <input
            type="text"
            value={newModel}
            onChange={(e) => setNewModel((e.target as HTMLInputElement).value)}
            class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder={settingsContent[lang].modelPlaceholder}
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {settingsContent[lang].ttsUrlLabel}
          </label>
          <input
            type="text"
            value={newTtsUrl}
            onChange={(e) => setNewTtsUrl((e.target as HTMLInputElement).value)}
            class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder={settingsContent[lang].ttsUrlPlaceholder}
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {settingsContent[lang].ttsKeyLabel}
          </label>
          <input
            type="password"
            value={newTtsKey}
            onChange={(e) => setNewTtsKey((e.target as HTMLInputElement).value)}
            class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder={settingsContent[lang].ttsKeyPlaceholder}
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            {settingsContent[lang].ttsModelLabel}
          </label>
          <input
            type="text"
            value={newTtsModel}
            onChange={(e) => setNewTtsModel((e.target as HTMLInputElement).value)}
            class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder={settingsContent[lang].ttsModelPlaceholder}
          />
        </div>

        <div class="flex justify-end space-x-4">
          <button
            onClick={onClose}
            class="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            {settingsContent[lang].cancel}
          </button>
          <button
            onClick={() => onSave(newApiUrl, newApiKey, newModel, newTtsUrl, newTtsKey, newTtsModel)}
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {settingsContent[lang].save}
          </button>
        </div>
      </div>
    </div>
  );
}
