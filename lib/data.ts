// types
export interface Template {
    id: string
    title: string
    description: string
    categories: string[]
    blockchainCompatibility: string[]
    author: string
    downloads: number
    imageUrl?: string
  }

// Mock data for templates
const mockTemplates: Template[] = [
  {
    id: "1",
    title: "Web3 Wallet Integration",
    description: "A complete Web3 wallet integration template with MetaMask support.",
    categories: ["Wallet", "Starter"],
    blockchainCompatibility: ["Stellar", "Solana"],
    author: "Web3 Community",
    downloads: 2300,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "NFT Marketplace Starter",
    description: "Start building your NFT marketplace with this comprehensive template.",
    categories: ["NFT", "Marketplace"],
    blockchainCompatibility: ["Stellar", "Ethereum"],
    author: "NFT Labs",
    downloads: 1800,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "DeFi Dashboard",
    description: "A dashboard template for DeFi applications with key metrics and charts.",
    categories: ["DeFi", "Dashboard"],
    blockchainCompatibility: ["Stellar", "Solana", "Ethereum"],
    author: "DeFi Builders",
    downloads: 3100,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "4",
    title: "Smart Contract Deployment Kit",
    description: "Everything you need to deploy and manage smart contracts on multiple chains.",
    categories: ["Smart Contract"],
    blockchainCompatibility: ["Ethereum", "Polygon", "Binance"],
    author: "Blockchain Devs",
    downloads: 1500,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "5",
    title: "DAO Governance Framework",
    description: "Set up decentralized governance for your project with voting and proposal systems.",
    categories: ["DAO", "Governance"],
    blockchainCompatibility: ["Ethereum", "Defi"],
    author: "DAO Collective",
    downloads: 980,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "6",
    title: "Cross-Chain Bridge UI",
    description: "User interface for cross-chain token transfers and bridging assets.",
    categories: ["Bridge", "UI"],
    blockchainCompatibility: ["Ethereum", "Solana", "Avalanche"],
    author: "Bridge Builders",
    downloads: 2100,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "7",
    title: "Token Swap Interface",
    description: "Simple and efficient interface for swapping tokens across different protocols.",
    categories: ["DEX", "Swap"],
    blockchainCompatibility: ["Ethereum", "Binance", "Polygon"],
    author: "DeFi Designers",
    downloads: 4200,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "8",
    title: "NFT Minting Page",
    description: "Beautiful minting page for NFT collections with metadata support.",
    categories: ["NFT", "Minting"],
    blockchainCompatibility: ["Ethereum", "Solana"],
    author: "NFT Creators",
    downloads: 3600,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "9",
    title: "Staking Dashboard",
    description: "Complete staking interface with rewards tracking and analytics.",
    categories: ["Staking", "Dashboard"],
    blockchainCompatibility: ["Ethereum", "Cosmos", "Polkadot"],
    author: "Stake Masters",
    downloads: 1900,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "10",
    title: "Blockchain Explorer",
    description: "Custom blockchain explorer for viewing transactions and blocks.",
    categories: ["Explorer", "Bitcoin"],
    blockchainCompatibility: ["Ethereum", "Bitcoin", "Custom"],
    author: "Chain Explorers",
    downloads: 1200,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "11",
    title: "DeFi Yield Aggregator",
    description: "Yield optimization platform template with auto-compounding features.",
    categories: ["DeFi", "Yield"],
    blockchainCompatibility: ["Ethereum", "Avalanche", "Fantom"],
    author: "Yield Hunters",
    downloads: 2800,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "12",
    title: "Multi-sig Wallet Interface",
    description: "Secure multi-signature wallet interface for team treasury management.",
    categories: ["Wallet", "Security"],
    blockchainCompatibility: ["Ethereum", "Bitcoin"],
    author: "Security First",
    downloads: 1700,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "12",
    title: "Multi-sig Wallet Interface",
    description: "Secure multi-signature wallet interface for team treasury management.",
    categories: ["Wallet", "Security"],
    blockchainCompatibility: ["Ethereum", "Bitcoin"],
    author: "Security First",
    downloads: 1700,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "12",
    title: "Multi-sig Wallet Interface",
    description: "Secure multi-signature wallet interface for team treasury management.",
    categories: ["Wallet", "Security"],
    blockchainCompatibility: ["Ethereum", "Bitcoin"],
    author: "Security First",
    downloads: 1700,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "12",
    title: "Multi-sig Wallet Interface",
    description: "Secure multi-signature wallet interface for team treasury management.",
    categories: ["Wallet", "Security"],
    blockchainCompatibility: ["Ethereum", "Bitcoin"],
    author: "Security First",
    downloads: 1700,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  

]

// Simulate API call with pagination
export async function fetchTemplates(page: number, limit: number): Promise<Template[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return mockTemplates.slice(startIndex, endIndex)
}

// This function would be used when implementing search/filter functionality
export async function searchTemplates(
  query: string,
  filters: {
    categories?: string[]
    blockchainCompatibility?: string[]
  },
  page: number,
  limit: number,
): Promise<Template[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  let filtered = [...mockTemplates]

  // Filter by search query
  if (query) {
    const lowerQuery = query.toLowerCase()
    filtered = filtered.filter(
      (template) =>
        template.title.toLowerCase().includes(lowerQuery) || template.description.toLowerCase().includes(lowerQuery),
    )
  }

  // Filter by categories
  if (filters.categories && filters.categories.length > 0) {
    filtered = filtered.filter((template) => template.categories.some((cat) => filters.categories?.includes(cat)))
  }

  // Filter by blockchainCompatibility
  if (filters.blockchainCompatibility && filters.blockchainCompatibility.length > 0) {
    filtered = filtered.filter((template) => template.blockchainCompatibility.some((chain) => filters.blockchainCompatibility?.includes(chain)))
  }


  // Apply pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return filtered.slice(startIndex, endIndex)
}

